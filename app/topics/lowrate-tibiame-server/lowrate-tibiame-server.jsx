import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-server');
}

export default function LowrateTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-server" />;
}
