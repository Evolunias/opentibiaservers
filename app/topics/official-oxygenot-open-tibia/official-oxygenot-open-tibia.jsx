import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-open-tibia');
}

export default function OfficialOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-open-tibia" />;
}
