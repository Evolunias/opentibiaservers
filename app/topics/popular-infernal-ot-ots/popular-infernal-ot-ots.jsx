import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-ots');
}

export default function PopularInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-ots" />;
}
