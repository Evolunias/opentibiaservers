import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-retro-server');
}

export default function Coxaot12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-retro-server" />;
}
