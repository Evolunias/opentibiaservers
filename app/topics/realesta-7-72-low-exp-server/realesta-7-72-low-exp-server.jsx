import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-72-low-exp-server');
}

export default function Realesta772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-72-low-exp-server" />;
}
