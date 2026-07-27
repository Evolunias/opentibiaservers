import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-ot-server');
}

export default function HighrateNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-ot-server" />;
}
