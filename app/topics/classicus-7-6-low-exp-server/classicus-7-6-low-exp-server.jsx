import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-low-exp-server');
}

export default function Classicus76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-low-exp-server" />;
}
