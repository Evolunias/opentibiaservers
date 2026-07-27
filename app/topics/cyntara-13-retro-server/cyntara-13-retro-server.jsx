import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-retro-server');
}

export default function Cyntara13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-retro-server" />;
}
