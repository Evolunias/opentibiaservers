import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-low-exp-server-france');
}

export default function AureraGlobalLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-low-exp-server-france" />;
}
