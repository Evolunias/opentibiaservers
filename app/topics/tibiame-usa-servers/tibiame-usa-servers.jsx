import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-usa-servers');
}

export default function TibiameUsaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-usa-servers" />;
}
