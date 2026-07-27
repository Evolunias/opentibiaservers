import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-retro-server');
}

export default function InfernalOt96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-retro-server" />;
}
