import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-ot-server');
}

export default function NoResetLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-ot-server" />;
}
