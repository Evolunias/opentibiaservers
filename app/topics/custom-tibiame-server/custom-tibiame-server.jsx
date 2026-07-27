import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-server');
}

export default function CustomTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-server" />;
}
