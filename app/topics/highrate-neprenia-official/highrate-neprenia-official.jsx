import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-official');
}

export default function HighrateNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-official" />;
}
