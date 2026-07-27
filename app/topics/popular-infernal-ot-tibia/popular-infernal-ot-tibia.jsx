import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-tibia');
}

export default function PopularInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-tibia" />;
}
