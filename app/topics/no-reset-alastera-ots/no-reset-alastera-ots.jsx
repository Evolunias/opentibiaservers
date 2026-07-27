import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-ots');
}

export default function NoResetAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-ots" />;
}
