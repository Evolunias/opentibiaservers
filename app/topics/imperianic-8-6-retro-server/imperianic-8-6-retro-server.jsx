import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-retro-server');
}

export default function Imperianic86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-retro-server" />;
}
