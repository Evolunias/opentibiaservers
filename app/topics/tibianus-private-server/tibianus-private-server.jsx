import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-private-server');
}

export default function TibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-private-server" />;
}
