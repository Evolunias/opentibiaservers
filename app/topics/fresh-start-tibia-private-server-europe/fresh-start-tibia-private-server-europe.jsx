import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-europe');
}

export default function FreshStartTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-europe" />;
}
