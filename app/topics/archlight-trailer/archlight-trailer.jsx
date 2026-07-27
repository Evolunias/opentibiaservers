import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-trailer');
}

export default function ArchlightTrailerKeywordPage() {
  return <StaticKeywordPage slug="archlight-trailer" />;
}
