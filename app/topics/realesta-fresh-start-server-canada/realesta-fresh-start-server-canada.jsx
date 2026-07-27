import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-canada');
}

export default function RealestaFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-canada" />;
}
