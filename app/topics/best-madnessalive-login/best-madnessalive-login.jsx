import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-login');
}

export default function BestMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-login" />;
}
