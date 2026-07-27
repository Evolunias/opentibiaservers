import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-official');
}

export default function PopularRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-official" />;
}
