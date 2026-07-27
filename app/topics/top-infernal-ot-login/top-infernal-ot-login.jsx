import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-login');
}

export default function TopInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-login" />;
}
