import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-ot');
}

export default function CustomMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-ot" />;
}
