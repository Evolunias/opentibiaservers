import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-canada');
}

export default function TibianusHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-canada" />;
}
