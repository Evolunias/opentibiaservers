import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-retro-server');
}

export default function Cyntara12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-retro-server" />;
}
