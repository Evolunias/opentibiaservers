import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fresh-start-server-europe');
}

export default function UnlineFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-fresh-start-server-europe" />;
}
