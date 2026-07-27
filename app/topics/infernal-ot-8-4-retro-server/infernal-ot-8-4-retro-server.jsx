import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-retro-server');
}

export default function InfernalOt84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-retro-server" />;
}
