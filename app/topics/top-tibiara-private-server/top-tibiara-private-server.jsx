import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-private-server');
}

export default function TopTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-private-server" />;
}
