import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-register');
}

export default function PopularCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-register" />;
}
