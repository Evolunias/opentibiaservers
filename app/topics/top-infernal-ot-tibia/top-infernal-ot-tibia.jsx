import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-tibia');
}

export default function TopInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-tibia" />;
}
