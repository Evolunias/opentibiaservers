import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-evolunia-server');
}

export default function RetroEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-evolunia-server" />;
}
