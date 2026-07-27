import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-europe');
}

export default function TibianusPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-europe" />;
}
