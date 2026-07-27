import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-private-server');
}

export default function TopTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-private-server" />;
}
