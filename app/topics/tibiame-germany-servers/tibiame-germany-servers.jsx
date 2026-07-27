import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-germany-servers');
}

export default function TibiameGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-germany-servers" />;
}
