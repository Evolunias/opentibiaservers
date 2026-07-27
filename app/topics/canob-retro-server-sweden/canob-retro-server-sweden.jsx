import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-sweden');
}

export default function CanobRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-sweden" />;
}
