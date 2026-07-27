import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-south-america');
}

export default function CanobHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-south-america" />;
}
