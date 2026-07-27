import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-register');
}

export default function LowrateAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-register" />;
}
