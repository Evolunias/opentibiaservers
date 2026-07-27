import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-official');
}

export default function CurrentAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-official" />;
}
