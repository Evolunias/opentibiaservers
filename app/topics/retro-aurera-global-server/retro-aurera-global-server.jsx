import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-aurera-global-server');
}

export default function RetroAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="retro-aurera-global-server" />;
}
