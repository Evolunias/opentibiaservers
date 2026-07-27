import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-low-exp-server');
}

export default function Classicus854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-low-exp-server" />;
}
