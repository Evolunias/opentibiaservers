import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-mexico');
}

export default function InfernalOtRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-mexico" />;
}
