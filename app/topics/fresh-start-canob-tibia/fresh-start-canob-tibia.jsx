import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-tibia');
}

export default function FreshStartCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-tibia" />;
}
