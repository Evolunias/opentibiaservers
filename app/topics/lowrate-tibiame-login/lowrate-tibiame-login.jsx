import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-login');
}

export default function LowrateTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-login" />;
}
