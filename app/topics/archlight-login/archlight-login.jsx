import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-login');
}

export default function ArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="archlight-login" />;
}
