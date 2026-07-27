import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-uk');
}

export default function NonPvpOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-uk" />;
}
