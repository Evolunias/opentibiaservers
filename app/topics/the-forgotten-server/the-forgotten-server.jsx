import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server');
}

export default function TheForgottenServerKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server" />;
}
