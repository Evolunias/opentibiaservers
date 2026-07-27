import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-sweden');
}

export default function ThorniaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-sweden" />;
}
