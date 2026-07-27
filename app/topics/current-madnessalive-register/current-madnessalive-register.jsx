import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-register');
}

export default function CurrentMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-register" />;
}
