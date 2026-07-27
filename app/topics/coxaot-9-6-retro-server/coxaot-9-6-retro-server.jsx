import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-retro-server');
}

export default function Coxaot96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-retro-server" />;
}
