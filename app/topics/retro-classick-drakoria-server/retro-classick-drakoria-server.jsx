import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-classick-drakoria-server');
}

export default function RetroClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-classick-drakoria-server" />;
}
