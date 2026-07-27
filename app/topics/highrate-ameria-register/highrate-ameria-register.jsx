import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-register');
}

export default function HighrateAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-register" />;
}
