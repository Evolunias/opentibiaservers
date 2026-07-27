import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-france');
}

export default function EmpirebrRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-france" />;
}
