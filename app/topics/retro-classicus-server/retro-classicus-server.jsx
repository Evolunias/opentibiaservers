import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-classicus-server');
}

export default function RetroClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="retro-classicus-server" />;
}
