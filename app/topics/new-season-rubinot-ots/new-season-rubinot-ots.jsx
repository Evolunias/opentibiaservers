import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-ots');
}

export default function NewSeasonRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-ots" />;
}
