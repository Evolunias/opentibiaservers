import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-germany');
}

export default function NonPvpOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-germany" />;
}
