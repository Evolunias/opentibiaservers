import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-login');
}

export default function LowrateInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-login" />;
}
