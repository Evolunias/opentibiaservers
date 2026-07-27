import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-open-tibia');
}

export default function TopCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-canob-open-tibia" />;
}
