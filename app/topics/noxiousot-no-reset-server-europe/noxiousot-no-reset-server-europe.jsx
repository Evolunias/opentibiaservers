import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-no-reset-server-europe');
}

export default function NoxiousotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-no-reset-server-europe" />;
}
