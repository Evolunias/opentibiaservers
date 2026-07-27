import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-sweden');
}

export default function ImperianicHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-sweden" />;
}
