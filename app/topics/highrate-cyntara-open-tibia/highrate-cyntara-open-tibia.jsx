import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-open-tibia');
}

export default function HighrateCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-open-tibia" />;
}
