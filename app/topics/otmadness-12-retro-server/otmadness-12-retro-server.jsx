import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-retro-server');
}

export default function Otmadness12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-retro-server" />;
}
