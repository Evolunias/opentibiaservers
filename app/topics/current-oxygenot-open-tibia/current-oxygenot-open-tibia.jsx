import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-open-tibia');
}

export default function CurrentOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-open-tibia" />;
}
