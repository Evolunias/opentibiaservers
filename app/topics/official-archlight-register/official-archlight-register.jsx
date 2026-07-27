import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-register');
}

export default function OfficialArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-register" />;
}
