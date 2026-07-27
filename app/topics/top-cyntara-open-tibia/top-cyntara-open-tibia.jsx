import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-open-tibia');
}

export default function TopCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-open-tibia" />;
}
