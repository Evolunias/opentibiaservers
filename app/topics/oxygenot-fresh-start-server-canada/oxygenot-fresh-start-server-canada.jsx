import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-canada');
}

export default function OxygenotFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-canada" />;
}
