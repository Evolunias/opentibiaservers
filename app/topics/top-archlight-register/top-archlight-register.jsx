import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-register');
}

export default function TopArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-register" />;
}
