import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-ot');
}

export default function NoResetAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-ot" />;
}
