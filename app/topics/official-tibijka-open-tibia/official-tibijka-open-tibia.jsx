import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-open-tibia');
}

export default function OfficialTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-open-tibia" />;
}
