import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-98-retro-server');
}

export default function Otmadness1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-98-retro-server" />;
}
