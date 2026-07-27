import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-open-tibia');
}

export default function OfficialMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-open-tibia" />;
}
