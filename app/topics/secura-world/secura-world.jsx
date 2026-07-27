import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-world');
}

export default function SecuraWorldKeywordPage() {
  return <StaticKeywordPage slug="secura-world" />;
}
