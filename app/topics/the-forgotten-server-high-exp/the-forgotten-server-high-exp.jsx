import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-high-exp');
}

export default function TheForgottenServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-high-exp" />;
}
