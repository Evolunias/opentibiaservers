import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-similar-servers');
}

export default function ArchlightSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-similar-servers" />;
}
