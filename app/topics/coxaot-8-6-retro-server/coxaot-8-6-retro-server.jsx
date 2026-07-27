import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-retro-server');
}

export default function Coxaot86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-retro-server" />;
}
