import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-france');
}

export default function AureraGlobalRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-france" />;
}
