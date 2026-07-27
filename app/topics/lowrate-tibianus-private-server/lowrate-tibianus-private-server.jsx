import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-private-server');
}

export default function LowrateTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-private-server" />;
}
