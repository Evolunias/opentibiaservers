import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-latin-america');
}

export default function CanobPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-latin-america" />;
}
