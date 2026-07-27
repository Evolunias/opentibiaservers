import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-madnessalive-server');
}

export default function WithActivePlayersMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-madnessalive-server" />;
}
