import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-sweden');
}

export default function BlazeraLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-sweden" />;
}
