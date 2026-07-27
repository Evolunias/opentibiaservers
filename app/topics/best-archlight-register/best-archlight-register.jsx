import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-register');
}

export default function BestArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-register" />;
}
