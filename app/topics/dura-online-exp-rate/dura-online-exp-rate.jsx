import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-exp-rate');
}

export default function DuraOnlineExpRateKeywordPage() {
  return <StaticKeywordPage slug="dura-online-exp-rate" />;
}
