import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-uk');
}

export default function InfernalOtRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-uk" />;
}
