import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-54-retro-server');
}

export default function Cyntara854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-54-retro-server" />;
}
