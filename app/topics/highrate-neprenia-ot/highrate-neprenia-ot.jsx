import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-ot');
}

export default function HighrateNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-ot" />;
}
