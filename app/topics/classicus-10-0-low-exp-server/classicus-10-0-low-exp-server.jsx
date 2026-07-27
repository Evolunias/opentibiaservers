import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-low-exp-server');
}

export default function Classicus100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-low-exp-server" />;
}
