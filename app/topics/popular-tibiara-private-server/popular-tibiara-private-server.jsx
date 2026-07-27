import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-private-server');
}

export default function PopularTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-private-server" />;
}
