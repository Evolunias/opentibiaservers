import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot');
}

export default function NewSeasonRubinotKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot" />;
}
