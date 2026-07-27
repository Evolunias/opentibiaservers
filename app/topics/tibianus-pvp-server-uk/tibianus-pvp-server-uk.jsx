import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-uk');
}

export default function TibianusPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-uk" />;
}
