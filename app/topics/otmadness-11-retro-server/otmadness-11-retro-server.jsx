import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-retro-server');
}

export default function Otmadness11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-retro-server" />;
}
