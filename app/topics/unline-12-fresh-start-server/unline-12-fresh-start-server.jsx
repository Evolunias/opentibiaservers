import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-fresh-start-server');
}

export default function Unline12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-fresh-start-server" />;
}
