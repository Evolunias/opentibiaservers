import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-ots');
}

export default function NoResetClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-ots" />;
}
