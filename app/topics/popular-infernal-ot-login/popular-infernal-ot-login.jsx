import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-login');
}

export default function PopularInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-login" />;
}
