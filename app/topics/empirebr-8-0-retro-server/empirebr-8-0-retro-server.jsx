import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-retro-server');
}

export default function Empirebr80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-retro-server" />;
}
