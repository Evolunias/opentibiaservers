import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-brazil');
}

export default function TheForgottenServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-brazil" />;
}
