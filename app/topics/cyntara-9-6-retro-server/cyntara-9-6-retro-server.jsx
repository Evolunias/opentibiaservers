import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-retro-server');
}

export default function Cyntara96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-retro-server" />;
}
