import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-server');
}

export default function FreshStartTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-server" />;
}
