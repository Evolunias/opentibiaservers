import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-poland');
}

export default function TibianusPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-poland" />;
}
