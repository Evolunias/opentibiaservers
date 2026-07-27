import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-latin-america');
}

export default function CanobRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-latin-america" />;
}
