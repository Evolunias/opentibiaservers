import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-non-pvp-server');
}

export default function Kasteria96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-non-pvp-server" />;
}
