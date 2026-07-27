import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-argentina');
}

export default function TibiantisPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-argentina" />;
}
