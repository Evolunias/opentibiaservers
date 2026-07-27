import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-retro-server');
}

export default function Coxaot15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-retro-server" />;
}
