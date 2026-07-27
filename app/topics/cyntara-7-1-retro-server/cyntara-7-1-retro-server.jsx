import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-retro-server');
}

export default function Cyntara71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-retro-server" />;
}
