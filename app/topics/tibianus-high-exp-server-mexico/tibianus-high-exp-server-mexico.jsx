import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-mexico');
}

export default function TibianusHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-mexico" />;
}
