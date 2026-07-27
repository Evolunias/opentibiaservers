import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia');
}

export default function BestNepreniaKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia" />;
}
