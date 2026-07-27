import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-enforced-server-europe');
}

export default function TibianusPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-enforced-server-europe" />;
}
