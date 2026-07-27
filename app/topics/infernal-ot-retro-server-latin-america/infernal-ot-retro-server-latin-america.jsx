import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-latin-america');
}

export default function InfernalOtRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-latin-america" />;
}
