import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-register');
}

export default function TopAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-register" />;
}
