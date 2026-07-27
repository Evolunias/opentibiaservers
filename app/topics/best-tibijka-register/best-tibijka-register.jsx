import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-register');
}

export default function BestTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-register" />;
}
