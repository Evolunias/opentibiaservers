import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-retro-server');
}

export default function Empirebr11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-retro-server" />;
}
