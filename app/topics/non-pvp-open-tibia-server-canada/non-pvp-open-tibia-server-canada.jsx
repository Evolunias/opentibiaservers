import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-canada');
}

export default function NonPvpOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-canada" />;
}
