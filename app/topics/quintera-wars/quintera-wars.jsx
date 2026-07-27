import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-wars');
}

export default function QuinteraWarsKeywordPage() {
  return <StaticKeywordPage slug="quintera-wars" />;
}
