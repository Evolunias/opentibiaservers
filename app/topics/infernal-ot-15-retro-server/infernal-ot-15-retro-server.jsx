import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-retro-server');
}

export default function InfernalOt15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-retro-server" />;
}
