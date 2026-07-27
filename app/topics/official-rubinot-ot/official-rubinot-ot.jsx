import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-ot');
}

export default function OfficialRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-ot" />;
}
