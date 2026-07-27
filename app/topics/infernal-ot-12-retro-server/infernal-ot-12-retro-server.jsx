import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-retro-server');
}

export default function InfernalOt12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-retro-server" />;
}
