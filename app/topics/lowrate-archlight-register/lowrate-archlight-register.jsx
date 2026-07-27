import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-register');
}

export default function LowrateArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-register" />;
}
