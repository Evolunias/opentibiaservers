import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-54-non-pvp-server');
}

export default function Kasteria854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-54-non-pvp-server" />;
}
