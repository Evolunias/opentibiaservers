import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-official');
}

export default function NewSeasonRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-official" />;
}
