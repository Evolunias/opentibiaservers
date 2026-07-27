import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-login');
}

export default function CurrentInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-login" />;
}
