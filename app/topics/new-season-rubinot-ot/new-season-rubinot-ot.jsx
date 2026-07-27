import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-ot');
}

export default function NewSeasonRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-ot" />;
}
