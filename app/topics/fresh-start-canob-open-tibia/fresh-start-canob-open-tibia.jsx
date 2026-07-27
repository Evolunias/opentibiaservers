import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-open-tibia');
}

export default function FreshStartCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-open-tibia" />;
}
