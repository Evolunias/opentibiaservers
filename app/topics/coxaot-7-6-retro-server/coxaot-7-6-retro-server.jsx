import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-retro-server');
}

export default function Coxaot76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-retro-server" />;
}
