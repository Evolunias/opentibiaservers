import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-official');
}

export default function CustomRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-official" />;
}
