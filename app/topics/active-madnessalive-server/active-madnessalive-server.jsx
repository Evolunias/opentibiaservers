import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-server');
}

export default function ActiveMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-server" />;
}
