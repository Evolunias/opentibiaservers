import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-non-pvp-server');
}

export default function Kasteria76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-non-pvp-server" />;
}
