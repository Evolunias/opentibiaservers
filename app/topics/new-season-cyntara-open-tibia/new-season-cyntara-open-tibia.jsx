import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-open-tibia');
}

export default function NewSeasonCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-open-tibia" />;
}
