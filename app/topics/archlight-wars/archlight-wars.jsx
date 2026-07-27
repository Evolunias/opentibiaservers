import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-wars');
}

export default function ArchlightWarsKeywordPage() {
  return <StaticKeywordPage slug="archlight-wars" />;
}
