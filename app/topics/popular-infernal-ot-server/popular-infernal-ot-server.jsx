import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-server');
}

export default function PopularInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-server" />;
}
