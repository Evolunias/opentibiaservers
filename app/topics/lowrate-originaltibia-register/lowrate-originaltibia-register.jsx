import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-register');
}

export default function LowrateOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-register" />;
}
