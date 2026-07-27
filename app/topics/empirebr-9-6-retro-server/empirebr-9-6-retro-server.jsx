import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-retro-server');
}

export default function Empirebr96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-retro-server" />;
}
