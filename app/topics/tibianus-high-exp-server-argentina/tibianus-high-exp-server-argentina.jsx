import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-argentina');
}

export default function TibianusHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-argentina" />;
}
