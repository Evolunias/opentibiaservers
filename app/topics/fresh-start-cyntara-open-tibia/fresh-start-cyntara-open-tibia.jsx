import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-open-tibia');
}

export default function FreshStartCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-open-tibia" />;
}
