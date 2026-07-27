import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-brazil');
}

export default function TibiascapePvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-brazil" />;
}
