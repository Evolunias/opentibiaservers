import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-canada');
}

export default function OlderaLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-canada" />;
}
