import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-login');
}

export default function BestInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-login" />;
}
