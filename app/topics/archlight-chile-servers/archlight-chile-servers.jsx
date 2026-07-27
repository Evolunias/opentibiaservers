import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-chile-servers');
}

export default function ArchlightChileServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-chile-servers" />;
}
