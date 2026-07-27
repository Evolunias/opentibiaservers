import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-private-server');
}

export default function FreshStartTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-private-server" />;
}
