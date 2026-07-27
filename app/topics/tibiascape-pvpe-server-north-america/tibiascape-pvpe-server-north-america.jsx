import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-north-america');
}

export default function TibiascapePvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-north-america" />;
}
