import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-retro-server');
}

export default function Empirebr100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-retro-server" />;
}
