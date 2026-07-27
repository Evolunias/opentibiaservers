import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-latin-america');
}

export default function TibiascapePvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-latin-america" />;
}
