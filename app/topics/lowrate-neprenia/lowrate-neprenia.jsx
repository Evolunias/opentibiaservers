import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia');
}

export default function LowrateNepreniaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia" />;
}
