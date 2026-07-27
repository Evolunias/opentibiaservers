import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia');
}

export default function TopNepreniaKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia" />;
}
