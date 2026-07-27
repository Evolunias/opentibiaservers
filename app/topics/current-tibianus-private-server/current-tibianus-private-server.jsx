import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-private-server');
}

export default function CurrentTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-private-server" />;
}
