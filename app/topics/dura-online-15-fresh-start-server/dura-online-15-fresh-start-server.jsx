import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-fresh-start-server');
}

export default function DuraOnline15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-fresh-start-server" />;
}
