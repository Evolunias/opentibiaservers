import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-argentina');
}

export default function TibiascapePvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-argentina" />;
}
