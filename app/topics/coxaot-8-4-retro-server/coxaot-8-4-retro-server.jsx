import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-retro-server');
}

export default function Coxaot84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-retro-server" />;
}
