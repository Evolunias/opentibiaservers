import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-register');
}

export default function PopularArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-register" />;
}
