import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-non-pvp-server');
}

export default function Kasteria81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-non-pvp-server" />;
}
