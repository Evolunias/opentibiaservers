import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-europe');
}

export default function InfernalOtRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-europe" />;
}
