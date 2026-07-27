import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibiantis-server');
}

export default function RetroTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="retro-tibiantis-server" />;
}
