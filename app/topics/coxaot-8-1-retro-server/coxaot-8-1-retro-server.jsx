import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-retro-server');
}

export default function Coxaot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-retro-server" />;
}
