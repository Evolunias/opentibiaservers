import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-open-tibia');
}

export default function PopularInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-open-tibia" />;
}
