import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-germany');
}

export default function TibianusHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-germany" />;
}
