import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-ot');
}

export default function NoResetMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-ot" />;
}
