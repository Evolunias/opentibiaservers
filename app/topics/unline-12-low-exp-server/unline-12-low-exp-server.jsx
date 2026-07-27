import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-low-exp-server');
}

export default function Unline12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-low-exp-server" />;
}
