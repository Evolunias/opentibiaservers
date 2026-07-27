import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria');
}

export default function TopKasteriaKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria" />;
}
