import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-register');
}

export default function PopularAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-register" />;
}
