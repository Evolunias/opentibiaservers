import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-retro-server');
}

export default function Cyntara100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-retro-server" />;
}
