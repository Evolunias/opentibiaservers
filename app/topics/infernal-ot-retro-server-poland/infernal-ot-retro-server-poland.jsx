import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-poland');
}

export default function InfernalOtRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-poland" />;
}
