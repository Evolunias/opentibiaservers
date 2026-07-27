import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-evo-server');
}

export default function DuraOnline12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-evo-server" />;
}
