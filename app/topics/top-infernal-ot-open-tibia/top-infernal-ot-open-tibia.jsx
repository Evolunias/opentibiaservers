import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-open-tibia');
}

export default function TopInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-open-tibia" />;
}
