import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-sweden');
}

export default function ImperianicLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-sweden" />;
}
