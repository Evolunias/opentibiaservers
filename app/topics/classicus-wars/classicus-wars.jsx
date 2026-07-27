import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-wars');
}

export default function ClassicusWarsKeywordPage() {
  return <StaticKeywordPage slug="classicus-wars" />;
}
