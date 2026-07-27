import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-ot');
}

export default function MiracleOtKeywordPage() {
  return <StaticKeywordPage slug="miracle-ot" />;
}
