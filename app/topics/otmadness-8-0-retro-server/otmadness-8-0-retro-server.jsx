import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-retro-server');
}

export default function Otmadness80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-retro-server" />;
}
