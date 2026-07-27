import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-poland');
}

export default function TibiantisPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-poland" />;
}
