import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-retro-server');
}

export default function Otmadness86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-retro-server" />;
}
