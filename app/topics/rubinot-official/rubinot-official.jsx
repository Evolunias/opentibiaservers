import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-official');
}

export default function RubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="rubinot-official" />;
}
