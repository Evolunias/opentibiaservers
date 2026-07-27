import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-retro-server');
}

export default function Empirebr13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-retro-server" />;
}
