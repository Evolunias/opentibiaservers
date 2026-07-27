import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-server');
}

export default function ActiveTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-server" />;
}
