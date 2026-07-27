import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-usa');
}

export default function TibiantisPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-usa" />;
}
