import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-register');
}

export default function FreshStartArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-register" />;
}
