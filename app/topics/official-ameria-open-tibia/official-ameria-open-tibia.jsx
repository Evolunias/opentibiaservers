import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-open-tibia');
}

export default function OfficialAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-open-tibia" />;
}
