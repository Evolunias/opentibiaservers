import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-tibia');
}

export default function OfficialRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-tibia" />;
}
