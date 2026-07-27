import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-low-exp-server');
}

export default function Classicus11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-low-exp-server" />;
}
