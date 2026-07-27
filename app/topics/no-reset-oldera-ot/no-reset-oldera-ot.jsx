import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-ot');
}

export default function NoResetOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-ot" />;
}
