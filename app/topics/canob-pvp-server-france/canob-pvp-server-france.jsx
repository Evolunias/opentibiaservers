import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-france');
}

export default function CanobPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-france" />;
}
