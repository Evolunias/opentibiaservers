import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-retro-server');
}

export default function Empirebr15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-retro-server" />;
}
