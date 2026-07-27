import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-official');
}

export default function CurrentRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-official" />;
}
