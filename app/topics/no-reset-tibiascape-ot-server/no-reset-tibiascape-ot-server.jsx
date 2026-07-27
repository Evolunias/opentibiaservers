import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-ot-server');
}

export default function NoResetTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-ot-server" />;
}
