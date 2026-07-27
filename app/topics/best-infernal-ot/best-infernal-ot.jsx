import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot');
}

export default function BestInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot" />;
}
