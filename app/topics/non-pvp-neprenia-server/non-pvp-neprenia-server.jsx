import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-neprenia-server');
}

export default function NonPvpNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-neprenia-server" />;
}
