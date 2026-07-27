import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-ots');
}

export default function BestInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-ots" />;
}
