import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-mexico');
}

export default function RealeraPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-mexico" />;
}
