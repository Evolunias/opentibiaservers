import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-retro-server');
}

export default function DuraOnline12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-retro-server" />;
}
