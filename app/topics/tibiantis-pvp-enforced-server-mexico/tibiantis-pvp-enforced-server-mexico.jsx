import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-mexico');
}

export default function TibiantisPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-mexico" />;
}
