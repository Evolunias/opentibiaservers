import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-official');
}

export default function OfficialRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-official" />;
}
