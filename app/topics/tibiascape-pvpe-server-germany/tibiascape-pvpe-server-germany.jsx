import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-germany');
}

export default function TibiascapePvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-germany" />;
}
