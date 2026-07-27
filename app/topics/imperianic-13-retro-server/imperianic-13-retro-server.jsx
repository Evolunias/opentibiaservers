import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-retro-server');
}

export default function Imperianic13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-retro-server" />;
}
