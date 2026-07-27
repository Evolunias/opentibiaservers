import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-low-exp-server-argentina');
}

export default function NoxiousotLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-low-exp-server-argentina" />;
}
