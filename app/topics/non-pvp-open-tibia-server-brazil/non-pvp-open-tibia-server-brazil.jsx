import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-brazil');
}

export default function NonPvpOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-brazil" />;
}
