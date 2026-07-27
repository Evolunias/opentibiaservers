import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-register');
}

export default function FreshStartAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-register" />;
}
