import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-mexico');
}

export default function TibiascapePvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-mexico" />;
}
