import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-canada');
}

export default function RealeraFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-canada" />;
}
