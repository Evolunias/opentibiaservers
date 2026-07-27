import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-login');
}

export default function NewSeasonRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-login" />;
}
