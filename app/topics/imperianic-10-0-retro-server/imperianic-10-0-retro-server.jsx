import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-retro-server');
}

export default function Imperianic100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-retro-server" />;
}
