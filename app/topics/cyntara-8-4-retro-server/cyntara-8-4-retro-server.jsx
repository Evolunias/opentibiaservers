import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-retro-server');
}

export default function Cyntara84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-retro-server" />;
}
