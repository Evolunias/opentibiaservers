import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-register');
}

export default function ActiveAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-register" />;
}
