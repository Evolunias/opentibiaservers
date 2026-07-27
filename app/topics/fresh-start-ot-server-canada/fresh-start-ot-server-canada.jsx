import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-canada');
}

export default function FreshStartOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-canada" />;
}
