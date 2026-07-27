import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-imperianic-server');
}

export default function RetroImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="retro-imperianic-server" />;
}
