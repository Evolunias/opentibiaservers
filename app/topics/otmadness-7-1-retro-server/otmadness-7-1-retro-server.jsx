import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-retro-server');
}

export default function Otmadness71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-retro-server" />;
}
