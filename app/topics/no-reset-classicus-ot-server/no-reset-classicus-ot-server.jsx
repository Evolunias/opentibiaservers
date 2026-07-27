import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-ot-server');
}

export default function NoResetClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-ot-server" />;
}
