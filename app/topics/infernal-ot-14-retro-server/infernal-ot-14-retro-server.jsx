import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-retro-server');
}

export default function InfernalOt14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-retro-server" />;
}
