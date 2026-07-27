import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-north-america');
}

export default function CanobRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-north-america" />;
}
