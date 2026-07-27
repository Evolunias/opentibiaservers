import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia');
}

export default function CurrentNepreniaKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia" />;
}
