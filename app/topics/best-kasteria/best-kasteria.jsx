import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria');
}

export default function BestKasteriaKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria" />;
}
