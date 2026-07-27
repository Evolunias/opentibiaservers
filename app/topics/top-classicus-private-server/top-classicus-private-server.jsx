import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-private-server');
}

export default function TopClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-private-server" />;
}
