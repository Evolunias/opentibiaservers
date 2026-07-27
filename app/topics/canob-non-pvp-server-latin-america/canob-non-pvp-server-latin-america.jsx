import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-latin-america');
}

export default function CanobNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-latin-america" />;
}
