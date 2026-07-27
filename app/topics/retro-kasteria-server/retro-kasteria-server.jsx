import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-kasteria-server');
}

export default function RetroKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-kasteria-server" />;
}
