import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-register');
}

export default function CurrentTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-register" />;
}
