import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-register');
}

export default function HighrateNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-register" />;
}
