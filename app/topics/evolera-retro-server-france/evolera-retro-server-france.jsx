import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-france');
}

export default function EvoleraRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-france" />;
}
