import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-europe');
}

export default function ForgottenServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-europe" />;
}
