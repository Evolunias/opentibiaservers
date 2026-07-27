import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-north-america');
}

export default function RealeraPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-north-america" />;
}
