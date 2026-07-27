import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-client');
}

export default function TheForgottenServerClientKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-client" />;
}
