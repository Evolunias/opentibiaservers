import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-server');
}

export default function NewTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-server" />;
}
