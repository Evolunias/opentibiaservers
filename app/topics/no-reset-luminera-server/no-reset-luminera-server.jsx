import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-server');
}

export default function NoResetLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-server" />;
}
