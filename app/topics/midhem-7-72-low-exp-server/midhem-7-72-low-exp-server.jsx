import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-low-exp-server');
}

export default function Midhem772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-low-exp-server" />;
}
