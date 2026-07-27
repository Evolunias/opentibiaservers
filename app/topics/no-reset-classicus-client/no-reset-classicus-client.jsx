import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-client');
}

export default function NoResetClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-client" />;
}
