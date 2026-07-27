import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-argentina');
}

export default function TibiascapeLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-argentina" />;
}
