import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-low-exp-server-sweden');
}

export default function OriginaltibiaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-low-exp-server-sweden" />;
}
