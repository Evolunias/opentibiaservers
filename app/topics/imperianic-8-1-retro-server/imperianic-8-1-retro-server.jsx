import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-retro-server');
}

export default function Imperianic81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-retro-server" />;
}
