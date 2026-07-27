import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-retro-server');
}

export default function Cyntara81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-retro-server" />;
}
