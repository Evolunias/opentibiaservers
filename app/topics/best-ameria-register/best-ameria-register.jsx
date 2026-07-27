import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-register');
}

export default function BestAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-register" />;
}
