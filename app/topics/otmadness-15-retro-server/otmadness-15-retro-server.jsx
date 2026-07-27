import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-retro-server');
}

export default function Otmadness15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-retro-server" />;
}
