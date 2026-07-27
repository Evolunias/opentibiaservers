import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-retro-server');
}

export default function Coxaot14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-retro-server" />;
}
