import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-high-exp-server');
}

export default function DuraOnline12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-high-exp-server" />;
}
