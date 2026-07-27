import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-europe-server');
}

export default function TibijkaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-europe-server" />;
}
