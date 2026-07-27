import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-register');
}

export default function CurrentEternalOdysseyRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-register" />;
}
