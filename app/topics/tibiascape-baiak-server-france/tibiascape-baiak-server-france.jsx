import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-france');
}

export default function TibiascapeBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-france" />;
}
