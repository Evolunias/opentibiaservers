import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-usa');
}

export default function TibiascapePvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-usa" />;
}
