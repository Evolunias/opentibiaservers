import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-login');
}

export default function ActiveInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-login" />;
}
