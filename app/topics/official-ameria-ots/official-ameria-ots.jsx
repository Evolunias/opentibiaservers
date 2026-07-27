import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-ots');
}

export default function OfficialAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-ots" />;
}
