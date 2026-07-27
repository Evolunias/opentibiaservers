import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-login');
}

export default function ActiveMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-login" />;
}
