import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-login');
}

export default function LowrateTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-login" />;
}
