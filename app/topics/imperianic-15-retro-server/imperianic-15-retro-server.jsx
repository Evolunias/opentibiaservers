import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-retro-server');
}

export default function Imperianic15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-retro-server" />;
}
