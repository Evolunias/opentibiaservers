import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-login');
}

export default function OfficialInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-login" />;
}
