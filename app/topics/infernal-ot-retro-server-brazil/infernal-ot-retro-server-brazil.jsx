import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-brazil');
}

export default function InfernalOtRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-brazil" />;
}
