import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-wars');
}

export default function SecuraWarsKeywordPage() {
  return <StaticKeywordPage slug="secura-wars" />;
}
