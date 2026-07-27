import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-canada');
}

export default function MediviaLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-canada" />;
}
