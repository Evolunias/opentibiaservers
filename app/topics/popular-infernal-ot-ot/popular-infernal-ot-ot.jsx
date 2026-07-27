import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-ot');
}

export default function PopularInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-ot" />;
}
