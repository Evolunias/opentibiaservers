import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-europe-server');
}

export default function AureraGlobalEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-europe-server" />;
}
