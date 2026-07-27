import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-login');
}

export default function HighrateRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-login" />;
}
