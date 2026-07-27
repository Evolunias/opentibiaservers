import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-north-america');
}

export default function RealestaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-north-america" />;
}
