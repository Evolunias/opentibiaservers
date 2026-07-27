import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-mexico');
}

export default function NonPvpOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-mexico" />;
}
