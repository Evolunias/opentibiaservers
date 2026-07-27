import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-official');
}

export default function ActiveRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-official" />;
}
