import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-login');
}

export default function LowrateArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-login" />;
}
