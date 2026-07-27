import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-ots');
}

export default function NoResetSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-ots" />;
}
