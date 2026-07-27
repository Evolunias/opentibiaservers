import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-register');
}

export default function LowrateTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-register" />;
}
