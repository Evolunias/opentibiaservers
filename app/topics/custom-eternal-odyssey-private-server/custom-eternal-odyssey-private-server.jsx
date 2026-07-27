import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-private-server');
}

export default function CustomEternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-private-server" />;
}
