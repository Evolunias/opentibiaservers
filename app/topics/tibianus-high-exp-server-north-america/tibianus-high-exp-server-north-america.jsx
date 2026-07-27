import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-north-america');
}

export default function TibianusHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-north-america" />;
}
