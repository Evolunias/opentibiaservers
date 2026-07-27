import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-usa');
}

export default function TibiascapeHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-usa" />;
}
