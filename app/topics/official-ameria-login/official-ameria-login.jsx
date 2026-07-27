import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-login');
}

export default function OfficialAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-login" />;
}
