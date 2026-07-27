import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-official');
}

export default function TopRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-official" />;
}
