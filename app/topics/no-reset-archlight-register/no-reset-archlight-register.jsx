import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-register');
}

export default function NoResetArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-register" />;
}
