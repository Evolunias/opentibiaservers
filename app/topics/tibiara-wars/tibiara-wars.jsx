import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-wars');
}

export default function TibiaraWarsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-wars" />;
}
