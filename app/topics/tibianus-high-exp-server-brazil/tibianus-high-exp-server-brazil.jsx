import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-brazil');
}

export default function TibianusHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-brazil" />;
}
