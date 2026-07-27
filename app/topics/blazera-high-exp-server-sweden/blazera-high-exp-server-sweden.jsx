import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-sweden');
}

export default function BlazeraHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-sweden" />;
}
