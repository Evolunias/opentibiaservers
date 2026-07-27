import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-0-retro-server');
}

export default function Imperianic80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-0-retro-server" />;
}
