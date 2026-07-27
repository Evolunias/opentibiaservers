import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-register');
}

export default function LowrateAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-register" />;
}
