import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-no-reset-server-argentina');
}

export default function NoxiousotNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-no-reset-server-argentina" />;
}
