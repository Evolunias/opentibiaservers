import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-open-tibia');
}

export default function OfficialRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-realera-open-tibia" />;
}
