import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-open-tibia');
}

export default function FreshStartTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-open-tibia" />;
}
