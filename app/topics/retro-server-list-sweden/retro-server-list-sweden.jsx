import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-sweden');
}

export default function RetroServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-sweden" />;
}
