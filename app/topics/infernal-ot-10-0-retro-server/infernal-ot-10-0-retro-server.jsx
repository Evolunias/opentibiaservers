import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-retro-server');
}

export default function InfernalOt100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-retro-server" />;
}
