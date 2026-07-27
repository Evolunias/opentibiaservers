import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-tibia');
}

export default function OfficialTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-tibia" />;
}
