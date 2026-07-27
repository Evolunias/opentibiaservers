import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-client');
}

export default function NoResetCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-client" />;
}
