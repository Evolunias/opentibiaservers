import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-low-exp-server');
}

export default function Classicus14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-low-exp-server" />;
}
