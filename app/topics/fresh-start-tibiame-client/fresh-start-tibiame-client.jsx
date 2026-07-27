import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-client');
}

export default function FreshStartTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-client" />;
}
