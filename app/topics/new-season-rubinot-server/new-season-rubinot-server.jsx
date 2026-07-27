import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-server');
}

export default function NewSeasonRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-server" />;
}
