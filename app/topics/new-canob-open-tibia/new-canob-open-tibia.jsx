import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-open-tibia');
}

export default function NewCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-canob-open-tibia" />;
}
