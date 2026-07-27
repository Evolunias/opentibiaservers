import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-guide');
}

export default function ArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="archlight-guide" />;
}
