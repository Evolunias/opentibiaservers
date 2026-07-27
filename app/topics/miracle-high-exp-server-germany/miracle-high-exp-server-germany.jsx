import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-high-exp-server-germany');
}

export default function MiracleHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-high-exp-server-germany" />;
}
