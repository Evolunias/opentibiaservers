import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-non-pvp-server');
}

export default function Kasteria14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-non-pvp-server" />;
}
