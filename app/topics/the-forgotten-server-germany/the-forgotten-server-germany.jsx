import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-germany');
}

export default function TheForgottenServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-germany" />;
}
