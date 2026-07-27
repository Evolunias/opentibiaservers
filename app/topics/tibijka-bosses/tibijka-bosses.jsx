import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-bosses');
}

export default function TibijkaBossesKeywordPage() {
  return <StaticKeywordPage slug="tibijka-bosses" />;
}
