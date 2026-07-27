import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-france');
}

export default function TibiascapeFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-france" />;
}
