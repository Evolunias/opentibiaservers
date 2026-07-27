import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-retro-server');
}

export default function Cyntara772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-retro-server" />;
}
