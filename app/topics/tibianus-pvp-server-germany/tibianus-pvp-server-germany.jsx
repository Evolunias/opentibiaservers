import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-germany');
}

export default function TibianusPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-germany" />;
}
