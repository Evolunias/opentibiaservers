import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-usa');
}

export default function NonPvpOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-usa" />;
}
