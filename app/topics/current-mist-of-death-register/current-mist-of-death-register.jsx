import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-register');
}

export default function CurrentMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-register" />;
}
