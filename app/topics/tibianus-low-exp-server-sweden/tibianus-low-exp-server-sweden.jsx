import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-sweden');
}

export default function TibianusLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-sweden" />;
}
