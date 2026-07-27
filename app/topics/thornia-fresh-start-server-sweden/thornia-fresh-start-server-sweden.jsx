import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-sweden');
}

export default function ThorniaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-sweden" />;
}
