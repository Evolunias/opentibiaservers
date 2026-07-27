import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-4-retro-server');
}

export default function Cyntara74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-4-retro-server" />;
}
