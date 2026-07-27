import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-retro-server');
}

export default function Otmadness100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-retro-server" />;
}
