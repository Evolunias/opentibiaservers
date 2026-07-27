import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-tibia');
}

export default function OfficialOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-tibia" />;
}
