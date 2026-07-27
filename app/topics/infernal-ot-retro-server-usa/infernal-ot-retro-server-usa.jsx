import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-usa');
}

export default function InfernalOtRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-usa" />;
}
