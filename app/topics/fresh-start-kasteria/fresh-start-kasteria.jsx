import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria');
}

export default function FreshStartKasteriaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria" />;
}
