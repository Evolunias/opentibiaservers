import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-france');
}

export default function TibiascapePvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-france" />;
}
