import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-login');
}

export default function CurrentMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-login" />;
}
