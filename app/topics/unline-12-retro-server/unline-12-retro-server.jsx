import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-retro-server');
}

export default function Unline12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-retro-server" />;
}
