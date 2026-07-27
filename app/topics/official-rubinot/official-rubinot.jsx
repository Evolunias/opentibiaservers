import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot');
}

export default function OfficialRubinotKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot" />;
}
