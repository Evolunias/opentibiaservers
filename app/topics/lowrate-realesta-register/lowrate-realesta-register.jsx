import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-register');
}

export default function LowrateRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-register" />;
}
