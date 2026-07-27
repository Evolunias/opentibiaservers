import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura');
}

export default function SecuraKeywordPage() {
  return <StaticKeywordPage slug="secura" />;
}
