import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-active');
}

export default function TheForgottenServerActiveKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-active" />;
}
