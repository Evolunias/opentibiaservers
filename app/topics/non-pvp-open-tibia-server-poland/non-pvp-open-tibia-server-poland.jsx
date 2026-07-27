import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-poland');
}

export default function NonPvpOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-poland" />;
}
