import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fresh-start-server-uk');
}

export default function UnlineFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-fresh-start-server-uk" />;
}
