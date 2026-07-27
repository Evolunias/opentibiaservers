import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-no-reset-server-germany');
}

export default function NoxiousotNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-no-reset-server-germany" />;
}
