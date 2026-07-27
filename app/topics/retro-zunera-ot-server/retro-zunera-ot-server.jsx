import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-zunera-ot-server');
}

export default function RetroZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="retro-zunera-ot-server" />;
}
