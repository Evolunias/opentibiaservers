import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-europe-servers');
}

export default function TibijkaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-europe-servers" />;
}
