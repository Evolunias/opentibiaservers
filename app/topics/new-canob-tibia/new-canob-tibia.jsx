import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-tibia');
}

export default function NewCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-canob-tibia" />;
}
