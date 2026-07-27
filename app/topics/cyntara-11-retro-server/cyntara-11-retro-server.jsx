import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-retro-server');
}

export default function Cyntara11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-retro-server" />;
}
