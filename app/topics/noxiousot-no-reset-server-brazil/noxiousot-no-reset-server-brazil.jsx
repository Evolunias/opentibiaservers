import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-no-reset-server-brazil');
}

export default function NoxiousotNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-no-reset-server-brazil" />;
}
