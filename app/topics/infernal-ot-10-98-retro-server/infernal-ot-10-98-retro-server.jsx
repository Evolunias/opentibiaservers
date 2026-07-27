import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-98-retro-server');
}

export default function InfernalOt1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-98-retro-server" />;
}
