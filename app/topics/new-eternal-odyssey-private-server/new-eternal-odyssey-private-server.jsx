import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-private-server');
}

export default function NewEternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-private-server" />;
}
