import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-mexico');
}

export default function NoResetOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-mexico" />;
}
