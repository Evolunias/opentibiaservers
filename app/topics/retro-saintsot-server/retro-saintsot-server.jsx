import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-saintsot-server');
}

export default function RetroSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="retro-saintsot-server" />;
}
