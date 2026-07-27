import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-retro-server');
}

export default function Coxaot11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-retro-server" />;
}
