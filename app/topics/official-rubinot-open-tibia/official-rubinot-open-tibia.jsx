import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-open-tibia');
}

export default function OfficialRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-open-tibia" />;
}
