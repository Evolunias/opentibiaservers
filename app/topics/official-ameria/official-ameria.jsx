import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria');
}

export default function OfficialAmeriaKeywordPage() {
  return <StaticKeywordPage slug="official-ameria" />;
}
