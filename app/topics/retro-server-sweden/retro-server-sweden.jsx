import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-sweden');
}

export default function RetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-server-sweden" />;
}
