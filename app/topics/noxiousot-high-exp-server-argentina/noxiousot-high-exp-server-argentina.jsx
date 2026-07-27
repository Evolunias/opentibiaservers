import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp-server-argentina');
}

export default function NoxiousotHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp-server-argentina" />;
}
