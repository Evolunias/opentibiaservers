import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-realera-server');
}

export default function RetroRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="retro-realera-server" />;
}
