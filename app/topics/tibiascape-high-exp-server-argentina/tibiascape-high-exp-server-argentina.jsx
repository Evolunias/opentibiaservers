import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-argentina');
}

export default function TibiascapeHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-argentina" />;
}
