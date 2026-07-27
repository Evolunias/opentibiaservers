import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-uk');
}

export default function FreshStartTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-uk" />;
}
