import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-exp-rate');
}

export default function CyntaraExpRateKeywordPage() {
  return <StaticKeywordPage slug="cyntara-exp-rate" />;
}
