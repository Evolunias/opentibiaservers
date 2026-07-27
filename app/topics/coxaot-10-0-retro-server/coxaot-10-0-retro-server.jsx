import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-retro-server');
}

export default function Coxaot100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-retro-server" />;
}
