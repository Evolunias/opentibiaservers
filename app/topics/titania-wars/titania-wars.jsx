import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-wars');
}

export default function TitaniaWarsKeywordPage() {
  return <StaticKeywordPage slug="titania-wars" />;
}
