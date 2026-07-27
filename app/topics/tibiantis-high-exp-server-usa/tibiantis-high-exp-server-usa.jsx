import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-usa');
}

export default function TibiantisHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-usa" />;
}
