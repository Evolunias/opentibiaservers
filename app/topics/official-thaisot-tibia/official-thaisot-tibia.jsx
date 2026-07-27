import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-tibia');
}

export default function OfficialThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-tibia" />;
}
