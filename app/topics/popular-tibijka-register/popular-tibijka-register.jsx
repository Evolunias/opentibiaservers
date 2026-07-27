import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-register');
}

export default function PopularTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-register" />;
}
