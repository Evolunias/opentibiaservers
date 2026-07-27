import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-status');
}

export default function TibiameStatusKeywordPage() {
  return <StaticKeywordPage slug="tibiame-status" />;
}
