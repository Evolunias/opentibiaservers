import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-54-non-pvp-server');
}

export default function Canob854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-54-non-pvp-server" />;
}
