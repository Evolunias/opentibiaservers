import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-uk');
}

export default function TibianusHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-uk" />;
}
