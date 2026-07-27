import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-sweden');
}

export default function RetroOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-sweden" />;
}
