import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-open-tibia');
}

export default function TibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-open-tibia" />;
}
