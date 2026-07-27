import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-latin-america');
}

export default function CanobFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-latin-america" />;
}
