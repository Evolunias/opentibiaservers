import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-official');
}

export default function BestRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-official" />;
}
