import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-low-exp-server');
}

export default function DuraOnline12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-low-exp-server" />;
}
