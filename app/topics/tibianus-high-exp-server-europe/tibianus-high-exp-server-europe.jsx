import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-europe');
}

export default function TibianusHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-europe" />;
}
