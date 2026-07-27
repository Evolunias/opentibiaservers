import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-retro-server');
}

export default function Otmadness81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-retro-server" />;
}
