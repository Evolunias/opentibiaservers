import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-register');
}

export default function CurrentArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-register" />;
}
