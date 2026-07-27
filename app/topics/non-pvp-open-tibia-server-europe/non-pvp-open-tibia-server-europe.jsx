import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-europe');
}

export default function NonPvpOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-europe" />;
}
