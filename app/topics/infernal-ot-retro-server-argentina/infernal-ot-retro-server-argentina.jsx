import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-argentina');
}

export default function InfernalOtRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-argentina" />;
}
