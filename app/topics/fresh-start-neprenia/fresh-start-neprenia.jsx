import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia');
}

export default function FreshStartNepreniaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia" />;
}
