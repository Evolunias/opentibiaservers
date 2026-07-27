import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-north-america');
}

export default function CanobFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-north-america" />;
}
