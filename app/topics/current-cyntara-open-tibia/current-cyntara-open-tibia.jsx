import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-open-tibia');
}

export default function CurrentCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-open-tibia" />;
}
