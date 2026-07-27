import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-low-exp-server');
}

export default function Classicus15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-low-exp-server" />;
}
