import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-open-tibia');
}

export default function TopTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-open-tibia" />;
}
