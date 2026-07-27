import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-mexico');
}

export default function PvpOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-mexico" />;
}
