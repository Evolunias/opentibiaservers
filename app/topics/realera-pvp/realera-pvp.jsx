import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp');
}

export default function RealeraPvpKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp" />;
}
