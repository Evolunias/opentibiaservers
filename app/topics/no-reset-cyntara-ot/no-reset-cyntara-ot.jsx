import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-ot');
}

export default function NoResetCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-ot" />;
}
