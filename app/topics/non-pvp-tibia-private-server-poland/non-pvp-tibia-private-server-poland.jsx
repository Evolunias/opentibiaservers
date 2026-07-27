import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-poland');
}

export default function NonPvpTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-poland" />;
}
