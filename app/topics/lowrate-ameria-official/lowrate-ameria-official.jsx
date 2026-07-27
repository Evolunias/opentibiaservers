import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-official');
}

export default function LowrateAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-official" />;
}
