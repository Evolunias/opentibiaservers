import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-high-exp');
}

export default function MiracleHighExpKeywordPage() {
  return <StaticKeywordPage slug="miracle-high-exp" />;
}
