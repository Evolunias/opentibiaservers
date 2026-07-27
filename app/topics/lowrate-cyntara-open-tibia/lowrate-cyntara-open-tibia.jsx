import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-open-tibia');
}

export default function LowrateCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-open-tibia" />;
}
