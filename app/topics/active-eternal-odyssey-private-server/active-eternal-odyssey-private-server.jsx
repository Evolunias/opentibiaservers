import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-private-server');
}

export default function ActiveEternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-private-server" />;
}
