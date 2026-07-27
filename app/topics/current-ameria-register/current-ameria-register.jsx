import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-register');
}

export default function CurrentAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-register" />;
}
