import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-retro-server');
}

export default function Empirebr14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-retro-server" />;
}
