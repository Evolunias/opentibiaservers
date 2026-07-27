import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-open-tibia');
}

export default function LowrateTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-open-tibia" />;
}
