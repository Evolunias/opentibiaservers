import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-register');
}

export default function CustomArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-register" />;
}
