import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-north-america');
}

export default function CanobLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-north-america" />;
}
