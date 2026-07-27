import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-client');
}

export default function PopularInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-client" />;
}
