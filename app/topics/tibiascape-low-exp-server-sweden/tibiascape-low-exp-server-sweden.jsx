import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-sweden');
}

export default function TibiascapeLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-sweden" />;
}
