import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-open-tibia');
}

export default function OfficialBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-open-tibia" />;
}
