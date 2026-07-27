import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-south-america');
}

export default function TibianusHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-south-america" />;
}
