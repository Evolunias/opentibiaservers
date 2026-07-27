import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-login');
}

export default function TopMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-login" />;
}
