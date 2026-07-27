import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-register');
}

export default function NewArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-register" />;
}
