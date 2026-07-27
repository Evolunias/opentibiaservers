import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-register');
}

export default function CustomAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-register" />;
}
