import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-sweden');
}

export default function ArchlightHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-sweden" />;
}
