import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-login');
}

export default function PopularTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-login" />;
}
