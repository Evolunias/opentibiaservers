import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-argentina');
}

export default function PvpOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-argentina" />;
}
