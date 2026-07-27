import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-high-exp-server-north-america');
}

export default function MiracleHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-high-exp-server-north-america" />;
}
