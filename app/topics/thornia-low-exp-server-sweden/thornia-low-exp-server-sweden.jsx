import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-sweden');
}

export default function ThorniaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-sweden" />;
}
