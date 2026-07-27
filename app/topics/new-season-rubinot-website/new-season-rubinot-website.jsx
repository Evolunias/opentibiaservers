import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-website');
}

export default function NewSeasonRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-website" />;
}
