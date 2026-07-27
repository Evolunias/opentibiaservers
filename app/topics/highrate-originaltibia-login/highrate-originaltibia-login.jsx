import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-login');
}

export default function HighrateOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-login" />;
}
