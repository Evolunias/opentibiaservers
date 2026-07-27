import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-miracle-server');
}

export default function RetroMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="retro-miracle-server" />;
}
