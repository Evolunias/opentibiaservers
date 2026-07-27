import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-register');
}

export default function LowrateThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-register" />;
}
