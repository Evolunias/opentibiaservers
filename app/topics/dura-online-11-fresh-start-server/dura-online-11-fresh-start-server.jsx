import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-fresh-start-server');
}

export default function DuraOnline11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-fresh-start-server" />;
}
