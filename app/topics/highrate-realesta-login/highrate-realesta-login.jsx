import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-login');
}

export default function HighrateRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-login" />;
}
