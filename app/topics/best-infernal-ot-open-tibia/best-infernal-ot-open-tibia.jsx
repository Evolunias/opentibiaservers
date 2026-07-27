import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-open-tibia');
}

export default function BestInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-open-tibia" />;
}
