import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-rubinot-server');
}

export default function RetroRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="retro-rubinot-server" />;
}
