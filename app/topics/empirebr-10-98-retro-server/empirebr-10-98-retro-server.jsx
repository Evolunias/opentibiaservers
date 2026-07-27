import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-98-retro-server');
}

export default function Empirebr1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-98-retro-server" />;
}
