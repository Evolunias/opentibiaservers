import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-client');
}

export default function NoResetCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-client" />;
}
