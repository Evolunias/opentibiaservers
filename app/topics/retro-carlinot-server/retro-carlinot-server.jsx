import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-carlinot-server');
}

export default function RetroCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="retro-carlinot-server" />;
}
