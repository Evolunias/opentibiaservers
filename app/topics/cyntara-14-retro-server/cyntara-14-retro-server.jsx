import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-retro-server');
}

export default function Cyntara14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-retro-server" />;
}
