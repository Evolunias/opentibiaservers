import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-tibia');
}

export default function TopCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-canob-tibia" />;
}
