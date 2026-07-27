import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-98-retro-server');
}

export default function Imperianic1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-98-retro-server" />;
}
