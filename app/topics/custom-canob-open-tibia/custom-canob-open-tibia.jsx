import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-open-tibia');
}

export default function CustomCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-open-tibia" />;
}
