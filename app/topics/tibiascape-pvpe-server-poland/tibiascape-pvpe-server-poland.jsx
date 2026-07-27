import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-poland');
}

export default function TibiascapePvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-poland" />;
}
