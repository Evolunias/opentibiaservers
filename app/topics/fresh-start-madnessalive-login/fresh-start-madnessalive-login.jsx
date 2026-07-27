import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-login');
}

export default function FreshStartMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-login" />;
}
