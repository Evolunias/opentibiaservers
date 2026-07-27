import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-canada');
}

export default function MediviaFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-canada" />;
}
