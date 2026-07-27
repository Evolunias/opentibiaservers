import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-ot');
}

export default function ActiveMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-ot" />;
}
