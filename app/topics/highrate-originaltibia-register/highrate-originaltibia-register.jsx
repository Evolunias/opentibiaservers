import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-register');
}

export default function HighrateOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-register" />;
}
