import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-register');
}

export default function PopularKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-register" />;
}
