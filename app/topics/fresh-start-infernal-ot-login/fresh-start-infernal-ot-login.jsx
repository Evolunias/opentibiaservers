import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-login');
}

export default function FreshStartInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-login" />;
}
