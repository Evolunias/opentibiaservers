import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-register');
}

export default function PopularInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-register" />;
}
