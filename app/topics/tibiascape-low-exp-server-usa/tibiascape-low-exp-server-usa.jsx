import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-usa');
}

export default function TibiascapeLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-usa" />;
}
