import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-server');
}

export default function NoResetTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-server" />;
}
