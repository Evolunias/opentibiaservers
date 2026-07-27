import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-canada');
}

export default function InfernalOtRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-canada" />;
}
