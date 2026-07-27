import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-yurots-server');
}

export default function RetroYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="retro-yurots-server" />;
}
