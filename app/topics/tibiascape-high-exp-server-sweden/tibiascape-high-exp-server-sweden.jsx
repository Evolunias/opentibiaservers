import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-sweden');
}

export default function TibiascapeHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-sweden" />;
}
