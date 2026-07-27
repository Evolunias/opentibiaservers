import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-open-tibia');
}

export default function CurrentUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-unline-open-tibia" />;
}
