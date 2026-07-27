import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-retro-server');
}

export default function Empirebr86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-retro-server" />;
}
