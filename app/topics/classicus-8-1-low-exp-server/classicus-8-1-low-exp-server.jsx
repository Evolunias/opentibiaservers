import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-low-exp-server');
}

export default function Classicus81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-low-exp-server" />;
}
