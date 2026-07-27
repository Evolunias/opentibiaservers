import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fresh-start-server-germany');
}

export default function UnlineFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-fresh-start-server-germany" />;
}
