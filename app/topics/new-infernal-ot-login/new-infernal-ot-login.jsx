import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-login');
}

export default function NewInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-login" />;
}
