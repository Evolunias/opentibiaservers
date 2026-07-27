import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-sweden');
}

export default function RetroClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-client-sweden" />;
}
