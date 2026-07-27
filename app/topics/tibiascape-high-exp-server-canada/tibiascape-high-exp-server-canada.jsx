import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-canada');
}

export default function TibiascapeHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-canada" />;
}
