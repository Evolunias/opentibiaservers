import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-mexico');
}

export default function RealestaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-mexico" />;
}
