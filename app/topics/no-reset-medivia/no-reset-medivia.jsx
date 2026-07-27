import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia');
}

export default function NoResetMediviaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia" />;
}
