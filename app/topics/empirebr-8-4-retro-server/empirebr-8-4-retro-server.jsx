import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-retro-server');
}

export default function Empirebr84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-retro-server" />;
}
