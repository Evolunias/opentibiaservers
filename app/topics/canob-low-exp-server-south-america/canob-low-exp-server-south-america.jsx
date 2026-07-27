import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-south-america');
}

export default function CanobLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-south-america" />;
}
