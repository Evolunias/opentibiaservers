import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-argentina');
}

export default function NonPvpOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-argentina" />;
}
