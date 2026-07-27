import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-sweden');
}

export default function TibianusHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-sweden" />;
}
