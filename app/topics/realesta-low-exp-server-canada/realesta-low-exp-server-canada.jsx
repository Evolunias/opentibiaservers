import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-canada');
}

export default function RealestaLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-canada" />;
}
