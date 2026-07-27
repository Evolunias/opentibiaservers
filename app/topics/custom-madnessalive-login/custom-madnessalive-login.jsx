import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-login');
}

export default function CustomMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-login" />;
}
