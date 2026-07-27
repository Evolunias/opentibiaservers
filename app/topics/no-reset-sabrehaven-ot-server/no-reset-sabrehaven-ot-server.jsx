import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-ot-server');
}

export default function NoResetSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-ot-server" />;
}
