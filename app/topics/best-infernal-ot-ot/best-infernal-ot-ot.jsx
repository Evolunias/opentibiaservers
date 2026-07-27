import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-ot');
}

export default function BestInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-ot" />;
}
