import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-register');
}

export default function HighrateArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-register" />;
}
