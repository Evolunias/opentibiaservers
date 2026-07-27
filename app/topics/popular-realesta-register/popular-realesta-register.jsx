import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-register');
}

export default function PopularRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-register" />;
}
