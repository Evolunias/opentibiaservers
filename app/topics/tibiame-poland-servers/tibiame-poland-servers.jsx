import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-poland-servers');
}

export default function TibiamePolandServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-poland-servers" />;
}
