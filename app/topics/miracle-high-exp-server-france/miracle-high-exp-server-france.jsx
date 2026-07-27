import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-high-exp-server-france');
}

export default function MiracleHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-high-exp-server-france" />;
}
