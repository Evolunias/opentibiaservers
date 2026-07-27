import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-canada');
}

export default function OxygenotHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-canada" />;
}
