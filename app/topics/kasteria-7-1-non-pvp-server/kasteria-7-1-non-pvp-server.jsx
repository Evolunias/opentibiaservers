import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-non-pvp-server');
}

export default function Kasteria71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-non-pvp-server" />;
}
