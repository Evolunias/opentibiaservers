import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-evo-server');
}

export default function Unline12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-evo-server" />;
}
