import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-retro-server');
}

export default function Otmadness76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-retro-server" />;
}
