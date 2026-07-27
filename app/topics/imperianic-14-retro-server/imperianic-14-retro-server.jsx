import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-retro-server');
}

export default function Imperianic14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-retro-server" />;
}
