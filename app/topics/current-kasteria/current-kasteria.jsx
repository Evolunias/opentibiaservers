import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria');
}

export default function CurrentKasteriaKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria" />;
}
