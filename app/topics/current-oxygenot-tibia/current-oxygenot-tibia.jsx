import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-tibia');
}

export default function CurrentOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-tibia" />;
}
