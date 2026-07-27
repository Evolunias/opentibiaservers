import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-server');
}

export default function NoResetClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-server" />;
}
