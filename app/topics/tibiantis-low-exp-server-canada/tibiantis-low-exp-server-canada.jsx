import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-canada');
}

export default function TibiantisLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-canada" />;
}
