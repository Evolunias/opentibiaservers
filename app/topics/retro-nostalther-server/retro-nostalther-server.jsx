import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-nostalther-server');
}

export default function RetroNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="retro-nostalther-server" />;
}
