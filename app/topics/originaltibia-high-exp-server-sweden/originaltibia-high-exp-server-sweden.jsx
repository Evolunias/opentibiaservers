import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-high-exp-server-sweden');
}

export default function OriginaltibiaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-high-exp-server-sweden" />;
}
