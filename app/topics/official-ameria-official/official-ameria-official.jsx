import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-official');
}

export default function OfficialAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-official" />;
}
