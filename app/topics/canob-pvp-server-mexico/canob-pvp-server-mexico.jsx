import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-mexico');
}

export default function CanobPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-mexico" />;
}
