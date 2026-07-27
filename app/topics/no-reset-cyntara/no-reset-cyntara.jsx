import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara');
}

export default function NoResetCyntaraKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara" />;
}
