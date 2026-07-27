import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-private-server');
}

export default function NoResetCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-private-server" />;
}
