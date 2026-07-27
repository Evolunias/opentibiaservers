import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-retro-server');
}

export default function Otmadness14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-retro-server" />;
}
