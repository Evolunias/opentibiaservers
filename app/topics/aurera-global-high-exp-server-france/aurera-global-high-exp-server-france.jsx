import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-france');
}

export default function AureraGlobalHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-france" />;
}
