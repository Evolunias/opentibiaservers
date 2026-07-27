import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-exp-rate');
}

export default function UnlineExpRateKeywordPage() {
  return <StaticKeywordPage slug="unline-exp-rate" />;
}
