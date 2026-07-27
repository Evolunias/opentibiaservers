import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-login');
}

export default function HighrateNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-login" />;
}
