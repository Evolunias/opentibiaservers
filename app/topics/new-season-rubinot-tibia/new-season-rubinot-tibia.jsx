import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-tibia');
}

export default function NewSeasonRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-tibia" />;
}
