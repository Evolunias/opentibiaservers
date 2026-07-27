import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-fresh-start-server');
}

export default function DuraOnline12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-fresh-start-server" />;
}
