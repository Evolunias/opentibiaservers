import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-canada');
}

export default function OxygenotLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-canada" />;
}
