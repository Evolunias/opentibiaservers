import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-enforced-server-poland');
}

export default function TibianusPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-enforced-server-poland" />;
}
