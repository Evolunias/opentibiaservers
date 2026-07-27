import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-ots');
}

export default function NoResetCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-ots" />;
}
