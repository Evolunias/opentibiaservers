import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-pvp-server');
}

export default function Canob96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-pvp-server" />;
}
