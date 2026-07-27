import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-realesta-server');
}

export default function RetroRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-realesta-server" />;
}
