import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-europe');
}

export default function NonPvpTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-europe" />;
}
