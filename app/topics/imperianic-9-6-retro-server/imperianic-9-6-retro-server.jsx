import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-retro-server');
}

export default function Imperianic96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-retro-server" />;
}
