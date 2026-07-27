import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-official');
}

export default function PopularInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-official" />;
}
