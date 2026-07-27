import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-retro-server');
}

export default function Otmadness74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-retro-server" />;
}
