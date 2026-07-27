import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-usa');
}

export default function TheForgottenServerUsaKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-usa" />;
}
