import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-france');
}

export default function TibiascapePvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-france" />;
}
