import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-private-server');
}

export default function NoResetLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-private-server" />;
}
