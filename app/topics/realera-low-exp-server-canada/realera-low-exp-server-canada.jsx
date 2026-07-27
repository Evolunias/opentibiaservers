import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-canada');
}

export default function RealeraLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-canada" />;
}
