import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-tibia');
}

export default function OfficialTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-tibia" />;
}
