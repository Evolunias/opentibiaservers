import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-open-tibia');
}

export default function CanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="canob-open-tibia" />;
}
