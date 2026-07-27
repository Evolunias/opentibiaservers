import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-retro-server');
}

export default function Imperianic11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-retro-server" />;
}
