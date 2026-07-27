import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-france-servers');
}

export default function TibianusFranceServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-france-servers" />;
}
