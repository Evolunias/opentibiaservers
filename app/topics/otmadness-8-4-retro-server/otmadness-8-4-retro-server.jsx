import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-retro-server');
}

export default function Otmadness84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-retro-server" />;
}
