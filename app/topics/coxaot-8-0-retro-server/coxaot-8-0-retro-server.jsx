import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-retro-server');
}

export default function Coxaot80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-retro-server" />;
}
