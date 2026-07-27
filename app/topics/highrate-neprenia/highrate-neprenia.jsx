import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia');
}

export default function HighrateNepreniaKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia" />;
}
