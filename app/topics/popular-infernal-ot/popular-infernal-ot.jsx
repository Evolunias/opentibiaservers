import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot');
}

export default function PopularInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot" />;
}
