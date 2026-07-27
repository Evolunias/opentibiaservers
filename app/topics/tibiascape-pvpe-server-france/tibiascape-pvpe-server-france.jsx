import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-france');
}

export default function TibiascapePvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-france" />;
}
