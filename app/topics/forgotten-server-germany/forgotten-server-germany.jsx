import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-germany');
}

export default function ForgottenServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-germany" />;
}
