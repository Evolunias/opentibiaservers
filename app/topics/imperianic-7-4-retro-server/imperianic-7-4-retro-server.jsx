import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-retro-server');
}

export default function Imperianic74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-retro-server" />;
}
