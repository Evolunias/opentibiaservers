import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-evo-servers');
}

export default function Unline12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="unline-12-evo-servers" />;
}
