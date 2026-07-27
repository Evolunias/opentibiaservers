import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-infernal-ot-server');
}

export default function RetroInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="retro-infernal-ot-server" />;
}
