import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-ot');
}

export default function OfficialAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-ot" />;
}
