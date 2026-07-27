import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-usa');
}

export default function TibiantisLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-usa" />;
}
