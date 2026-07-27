import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-ot-server');
}

export default function PopularInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-ot-server" />;
}
