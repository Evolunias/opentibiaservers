import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-canada');
}

export default function MediviaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-canada" />;
}
