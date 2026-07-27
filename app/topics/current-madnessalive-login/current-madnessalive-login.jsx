import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-login');
}

export default function CurrentMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-login" />;
}
