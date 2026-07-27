import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-france');
}

export default function InfernalOtRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-france" />;
}
