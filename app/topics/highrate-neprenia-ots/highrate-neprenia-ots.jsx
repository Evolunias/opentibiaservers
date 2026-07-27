import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-ots');
}

export default function HighrateNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-ots" />;
}
