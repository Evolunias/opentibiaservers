import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-list');
}

export default function TheForgottenServerListKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-list" />;
}
