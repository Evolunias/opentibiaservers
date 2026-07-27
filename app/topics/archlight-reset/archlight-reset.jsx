import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-reset');
}

export default function ArchlightResetKeywordPage() {
  return <StaticKeywordPage slug="archlight-reset" />;
}
