import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-ot');
}

export default function NoResetClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-ot" />;
}
