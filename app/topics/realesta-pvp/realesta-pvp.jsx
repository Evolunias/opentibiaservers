import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp');
}

export default function RealestaPvpKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp" />;
}
