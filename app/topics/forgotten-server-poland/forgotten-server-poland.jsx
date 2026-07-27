import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-poland');
}

export default function ForgottenServerPolandKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-poland" />;
}
