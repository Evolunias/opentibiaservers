import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-54-pvp-server');
}

export default function Canob854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-54-pvp-server" />;
}
