import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-usa');
}

export default function TibianusHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-usa" />;
}
