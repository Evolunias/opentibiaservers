import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-register');
}

export default function LowrateRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-register" />;
}
