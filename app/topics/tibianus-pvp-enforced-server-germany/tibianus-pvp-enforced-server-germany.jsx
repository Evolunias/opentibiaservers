import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-enforced-server-germany');
}

export default function TibianusPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-enforced-server-germany" />;
}
