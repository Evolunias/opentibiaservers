import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-register');
}

export default function TopTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-register" />;
}
