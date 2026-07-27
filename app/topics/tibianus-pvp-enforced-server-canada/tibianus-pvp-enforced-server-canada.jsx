import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-enforced-server-canada');
}

export default function TibianusPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-enforced-server-canada" />;
}
