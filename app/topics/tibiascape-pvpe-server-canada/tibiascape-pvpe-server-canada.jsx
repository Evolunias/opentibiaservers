import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-canada');
}

export default function TibiascapePvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-canada" />;
}
