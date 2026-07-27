import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-tibia');
}

export default function BestInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-tibia" />;
}
