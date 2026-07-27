import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-website');
}

export default function ArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="archlight-website" />;
}
