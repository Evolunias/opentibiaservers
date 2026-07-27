import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-poland');
}

export default function TibianusHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-poland" />;
}
