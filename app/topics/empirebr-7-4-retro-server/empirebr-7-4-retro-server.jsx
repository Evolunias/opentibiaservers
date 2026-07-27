import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-retro-server');
}

export default function Empirebr74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-retro-server" />;
}
