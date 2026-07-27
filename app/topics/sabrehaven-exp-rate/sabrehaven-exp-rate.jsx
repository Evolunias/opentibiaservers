import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-exp-rate');
}

export default function SabrehavenExpRateKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-exp-rate" />;
}
