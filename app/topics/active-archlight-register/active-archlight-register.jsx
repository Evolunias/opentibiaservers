import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-register');
}

export default function ActiveArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-register" />;
}
