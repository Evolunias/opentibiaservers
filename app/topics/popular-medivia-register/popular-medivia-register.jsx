import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-register');
}

export default function PopularMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-register" />;
}
