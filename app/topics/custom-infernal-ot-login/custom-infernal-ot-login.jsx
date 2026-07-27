import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-login');
}

export default function CustomInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-login" />;
}
