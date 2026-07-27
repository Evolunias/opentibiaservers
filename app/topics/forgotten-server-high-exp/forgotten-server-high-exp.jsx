import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-high-exp');
}

export default function ForgottenServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-high-exp" />;
}
