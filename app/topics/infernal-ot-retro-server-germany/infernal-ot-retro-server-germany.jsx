import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-germany');
}

export default function InfernalOtRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-germany" />;
}
