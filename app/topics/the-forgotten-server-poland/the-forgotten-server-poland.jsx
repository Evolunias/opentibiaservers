import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-poland');
}

export default function TheForgottenServerPolandKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-poland" />;
}
