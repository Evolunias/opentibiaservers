import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-community');
}

export default function TitaniaCommunityKeywordPage() {
  return <StaticKeywordPage slug="titania-community" />;
}
