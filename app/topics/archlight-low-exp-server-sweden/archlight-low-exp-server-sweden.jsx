import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-sweden');
}

export default function ArchlightLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-sweden" />;
}
