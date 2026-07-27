import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-open-tibia');
}

export default function OfficialCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-open-tibia" />;
}
