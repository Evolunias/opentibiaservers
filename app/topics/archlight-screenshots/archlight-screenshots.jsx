import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-screenshots');
}

export default function ArchlightScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="archlight-screenshots" />;
}
