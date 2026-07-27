import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-poland-server');
}

export default function ArchlightPolandServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-poland-server" />;
}
