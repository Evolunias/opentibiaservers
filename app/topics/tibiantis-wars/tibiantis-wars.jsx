import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-wars');
}

export default function TibiantisWarsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-wars" />;
}
