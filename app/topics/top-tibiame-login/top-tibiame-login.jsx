import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-login');
}

export default function TopTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-login" />;
}
