import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-login');
}

export default function PopularMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-login" />;
}
