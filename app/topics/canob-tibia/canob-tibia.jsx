import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-tibia');
}

export default function CanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="canob-tibia" />;
}
