import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-imperianic-server');
}

export default function NonPvpImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-imperianic-server" />;
}
