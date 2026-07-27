import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-ot-server');
}

export default function NewSeasonRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-ot-server" />;
}
