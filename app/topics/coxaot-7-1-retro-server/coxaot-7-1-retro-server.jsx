import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-retro-server');
}

export default function Coxaot71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-retro-server" />;
}
