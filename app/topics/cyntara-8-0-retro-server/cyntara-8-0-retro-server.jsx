import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-retro-server');
}

export default function Cyntara80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-retro-server" />;
}
