import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-south-america');
}

export default function OlderaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-south-america" />;
}
