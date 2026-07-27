import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-high-exp-server');
}

export default function Unline12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-high-exp-server" />;
}
