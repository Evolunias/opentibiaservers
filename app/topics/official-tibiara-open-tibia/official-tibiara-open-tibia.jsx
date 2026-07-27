import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-open-tibia');
}

export default function OfficialTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-open-tibia" />;
}
