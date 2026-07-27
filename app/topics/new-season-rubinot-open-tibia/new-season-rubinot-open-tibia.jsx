import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-open-tibia');
}

export default function NewSeasonRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-open-tibia" />;
}
