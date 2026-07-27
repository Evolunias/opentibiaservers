import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-website');
}

export default function PopularInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-website" />;
}
