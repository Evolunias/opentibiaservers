import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-poland-servers');
}

export default function ArchlightPolandServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-poland-servers" />;
}
