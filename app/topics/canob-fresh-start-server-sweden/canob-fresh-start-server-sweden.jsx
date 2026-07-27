import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-sweden');
}

export default function CanobFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-sweden" />;
}
