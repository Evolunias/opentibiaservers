import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-open-tibia');
}

export default function OfficialThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-open-tibia" />;
}
